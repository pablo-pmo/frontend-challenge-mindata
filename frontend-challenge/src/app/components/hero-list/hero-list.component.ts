import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public columnsToDisplay: string[] = ['id', 'name'];
  public dataSource: MatTableDataSource<Hero>;

  constructor(private heroService: HeroService) {
    this.dataSource = new MatTableDataSource(this.heroService.getHeroes());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
