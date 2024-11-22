import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public columnsToDisplay: string[] = ['id', 'name'];
  public dataSource: MatTableDataSource<Hero>;

  constructor(private router: Router, private heroService: HeroService) {
    this.dataSource = new MatTableDataSource(this.heroService.getHeroes());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: KeyboardEvent): void {
    const filterText: string = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterText.trim();
  }

  navigateAddHero(): void {
    this.router.navigate(['heroes', 'add', this.heroService.getNextId()]);
  }
}
