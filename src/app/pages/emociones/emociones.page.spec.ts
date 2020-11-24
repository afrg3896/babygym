import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmocionesPage } from './emociones.page';

describe('EmocionesPage', () => {
  let component: EmocionesPage;
  let fixture: ComponentFixture<EmocionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmocionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmocionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
