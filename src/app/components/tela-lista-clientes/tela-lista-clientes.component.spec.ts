import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaListaClientesComponent } from './tela-lista-clientes.component';

describe('TelaListaClientesComponent', () => {
  let component: TelaListaClientesComponent;
  let fixture: ComponentFixture<TelaListaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaListaClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
