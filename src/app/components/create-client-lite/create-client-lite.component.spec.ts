import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientLiteComponent } from './create-client-lite.component';

describe('CreateClientLiteComponent', () => {
  let component: CreateClientLiteComponent;
  let fixture: ComponentFixture<CreateClientLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClientLiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateClientLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
