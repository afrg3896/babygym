import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagenesPage } from './imagenes.page';

describe('ImagenesPage', () => {
  let component: ImagenesPage;
  let fixture: ComponentFixture<ImagenesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
