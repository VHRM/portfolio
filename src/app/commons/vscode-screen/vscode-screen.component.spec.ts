import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscodeScreenComponent } from './vscode-screen.component';

describe('VscodeScreenComponent', () => {
  let component: VscodeScreenComponent;
  let fixture: ComponentFixture<VscodeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VscodeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VscodeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
