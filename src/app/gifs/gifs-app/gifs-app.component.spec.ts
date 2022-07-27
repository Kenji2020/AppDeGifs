import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsAppComponent } from './gifs-app.component';

describe('GifsAppComponent', () => {
  let component: GifsAppComponent;
  let fixture: ComponentFixture<GifsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
