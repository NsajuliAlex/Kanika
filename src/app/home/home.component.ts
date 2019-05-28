import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public kanikaContent: any;
public aboutus: any;

public carBrands = ['ACURA', 'ASTON MARTIN', 'AUDI', 'BENTLEY', 'BMW', 'BUICK',
'CADILLAC', 'CHEVROLET', 'CHRYSLER', 'DODGE', 'FERRARI', 'FORD', 'GMC', 'HONDA', 'OTHER'];
public carIssues = ['Engine', 'Tires', 'WindScreen', 'BreakDown'];

  constructor(private buildForm: FormBuilder) {

   }

bookingForm = this.buildForm.group({
carBrand: ['', Validators.required],
carModel: [''],
vehicleNumber: [''],
serviceType: ['DoorStep'],
carService: [''],
describeIssues: ['', Validators.minLength(10) ]


});
  ngOnInit() {
    this.kanikaContent = {
      title: 'Remote & DoorStep repair services.',
      shortdescription: `Kanika Africa's most trusted mechanic service provider`,
      topNav: [
        {
          contact: 'ariaaltex73@gmai.com',
          icon: 'fa-envelope'
        },
        {
         contact: ' +918335033993'
        }
      ],
      socialIcons: [
        {
          icon: 'fa-facebook-square'
         },
         {
          icon: ' fa-instagram'
         },
         {
          icon: 'fa-twitter'
         },
         {
          icon: ' fa-google-plus-square'
         }
      ],
      navigationItems: [
        {linkid: 'home', name: 'Home'},
        {linkid: 'bookForm', name: 'Book Service'},
        {linkid: 'procedure', name: 'How We Work'},
        {linkid: 'aboutUs', name: 'AboutUs'},
        {linkid: 'brands', name: 'Brands'},

        // 'Book Service', 'How We Work', 'AboutUs', 'Brands']
      ]
    };

    this.aboutus = {
      title: 'About Us',
      description : `Kanika is an African based organisation of certified mechanics that offer both door to door and
  pick up services to customers from remote locations at the
  customer's desired time and convinience. Just get in contact with our ecpert mechanics. Someone
  will
  be at our location in no time
  We offer professionalism at a pocket friendly price. Here at Kanika we are here to serve you.
`

    };
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}


