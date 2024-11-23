import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroListComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
