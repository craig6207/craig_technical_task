import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let pageRoot: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    pageRoot = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct welcome header', () => {
    const testElement = pageRoot.querySelector('ng-test-banner-header');
    expect(testElement.textContent).toContain('Welcome');
  });

  it('should show correct body text', () => {
    const testElement = pageRoot.querySelector('ng-test-banner-body');
    expect(testElement.textContent).toContain('What would you like to do?');
  });
});
