import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialSwipePage } from './tutorial-swipe.page';

describe('TutorialSwipePage', () => {
  let component: TutorialSwipePage;
  let fixture: ComponentFixture<TutorialSwipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialSwipePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialSwipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
