import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorearPage } from './colorear.page';

describe('ColorearPage', () => {
  let component: ColorearPage;
  let fixture: ComponentFixture<ColorearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
