import { Component, OnInit } from '@angular/core';
import { addTranslation, logoutUser } from 'src/app/store/actions/user/user.actions';
import { Store } from '@ngrx/store';
import { Translation } from '../../../../../shared/models/translation.model';
import { User } from '../../../../../shared/models/user.model';
import { loggedInUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
@Component({
  selector: 'app-button-display',
  templateUrl: './button-display.component.html',
  styleUrls: ['./button-display.component.scss']
})
export class ButtonDisplayComponent implements OnInit {

  public loggedInUser$: Observable<User | null>;

  constructor(private store: Store<AppState>) {
    this.loggedInUser$ = this.store.select(loggedInUserSelector)
  }

  ngOnInit(): void {
  }

  toggleClass: boolean = false;
  toggleClass1: boolean = false;
  toggleClass2: boolean = false;
  toggleClass3: boolean = false;
  toggleClass4: boolean = false;
  toggleClass5: boolean = false;
  toggleClass6: boolean = false;

  combinationArray: string[] = [];
  resultArray: string[] = [];
  imagesArray: string[] = []

  numberValues: any = {
    '234': 0,
    '1': 1,
    '13': 2,
    '12': 3,
    '124': 4,
    '14': 5,
    '123': 6,
    '1234': 7,
    '134': 8,
    '23': 9,
  };

  letterValues: any = {
    '1': 'A',
    '13': 'B',
    '12': 'C',
    '124': 'D',
    '14': 'E',
    '123': 'F',
    '1234': 'G',
    '134': 'H',
    '23': 'I',
    '234': 'J',
    '15': 'K',
    '135': 'L',
    '125': 'M',
    '1245': 'N',
    '145': 'O',
    '1235': 'P',
    '12345': 'Q',
    '1345': 'R',
    '235': 'S',
    '2345': 'T',
    '156': 'U',
    '1356': 'V',
    '2346': 'W',
    '1256': 'X',
    '12456': 'Y',
    '1456': 'Z',
  };
  combinationString = '';
  resultString = '';
  translationType = 'Numbers';


  pushToArray(string: string) {
    // let toggley = "toggleClass" + string
    // console.log(toggley)
    if(this.combinationArray.includes(string) ){
      this.combinationArray = this.combinationArray.filter(s => s != string)
    } else {
      this.combinationArray.push(string);
    }


  }

  displayResult() {
    this.combinationArray.sort();
    this.combinationString = this.combinationArray.join('');
    if (this.translationType == 'Numbers') {
      const resultValue = this.numberValues[this.combinationString];
      this.resultArray.push(resultValue);
      this.resultString = this.resultArray.join('');
      console.log(this.resultString);

    } else {
      const resultValue = this.letterValues[this.combinationString];
      this.resultArray.push(resultValue);
      this.resultString = this.resultArray.join('');
      console.log(this.resultString)

    }
    this.resetResult();
  }

  resetResult() {
    this.combinationArray = [];
    this.toggleClass1 = false;
    this.toggleClass2 = false;
    this.toggleClass3 = false;
    this.toggleClass4 = false;
    this.toggleClass5 = false;
    this.toggleClass6 = false;
  }

  clearResultString() {
    this.resultString = ''
    this.resultArray = []
  }

  switchTranslationType() {
    if (this.translationType == 'Numbers') {
      this.translationType = 'Letters';
    } else {
      this.translationType = 'Numbers';
    }
  }

  addTranslation(user: User, message: string) {
    this.store.dispatch(addTranslation({data: {_id: `${user._id}`, message}}))
  }

  logoutUser(){
    this.store.dispatch(logoutUser())
  }

}
