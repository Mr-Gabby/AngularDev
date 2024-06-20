import { Component } from '@angular/core';
import { SackiteyService } from '../services/sackitey.service';
import { Country } from '../../../country';

@Component({
  selector: 'app-sackitey-home',
  templateUrl: './sackitey-home.component.html',
  styleUrl: './sackitey-home.component.css'
})
export class SackiteyHomeComponent {

  countries!: Country[];
  displayedColumns: string[] = ['country', 'region', 'capital', 'population', 'currency', 'major-exports', 'languages'];

  constructor(private CountryService: SackiteyService) { }
  ngOnInit(): void {
      this.getCountries();
  }

  getCountries(): void {
    this.CountryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

}
