import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPromiseComponent } from './curso-promise.component';

describe('CursoPromiseComponent', () => {
  let component: CursoPromiseComponent;
  let fixture: ComponentFixture<CursoPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
