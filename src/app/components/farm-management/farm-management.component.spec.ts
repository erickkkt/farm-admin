import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmManagementComponent } from './farm-management.component';

describe('FarmManagementComponent', () => {
  let component: FarmManagementComponent;
  let fixture: ComponentFixture<FarmManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
