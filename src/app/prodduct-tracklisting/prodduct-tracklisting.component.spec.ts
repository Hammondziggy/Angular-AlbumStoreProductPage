import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdductTracklistingComponent } from './prodduct-tracklisting.component';

describe('ProdductTracklistingComponent', () => {
  let component: ProdductTracklistingComponent;
  let fixture: ComponentFixture<ProdductTracklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdductTracklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdductTracklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
