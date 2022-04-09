import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOneComponent } from './explore-one.component';

describe('ExploreOneComponent', () => {
  let component: ExploreOneComponent;
  let fixture: ComponentFixture<ExploreOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
