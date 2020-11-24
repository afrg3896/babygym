import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinternaPage } from './linterna.page';

describe('LinternaPage', () => {
  let component: LinternaPage;
  let fixture: ComponentFixture<LinternaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinternaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
