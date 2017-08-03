import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2AwesomeCarouselComponent } from './ng2-awesome-carousel.component';

describe('Ng2AwesomeCarouselComponent', () => {
  let component: Ng2AwesomeCarouselComponent;
  let fixture: ComponentFixture<Ng2AwesomeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2AwesomeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2AwesomeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
