import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserDailogComponent } from './adduser-dailog.component';

describe('AdduserDailogComponent', () => {
  let component: AdduserDailogComponent;
  let fixture: ComponentFixture<AdduserDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
