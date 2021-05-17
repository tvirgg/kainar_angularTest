import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreacteFormComponent } from './post-creacte-form.component';

describe('PostCreacteFormComponent', () => {
  let component: PostCreacteFormComponent;
  let fixture: ComponentFixture<PostCreacteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreacteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreacteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
