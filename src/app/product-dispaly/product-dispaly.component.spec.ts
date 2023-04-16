import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDispalyComponent } from './product-dispaly.component';

describe('ProductDispalyComponent', () => {
  let component: ProductDispalyComponent;
  let fixture: ComponentFixture<ProductDispalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDispalyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
