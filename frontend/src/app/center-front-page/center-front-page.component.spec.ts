import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterFrontPageComponent } from './center-front-page.component';

describe('CenterFrontPageComponent', () => {
  let component: CenterFrontPageComponent;
  let fixture: ComponentFixture<CenterFrontPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterFrontPageComponent]
    });
    fixture = TestBed.createComponent(CenterFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
