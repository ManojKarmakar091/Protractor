Feature: I am going to validate the calculator App

@SanityTesting
Scenario Outline:  Calculator Add functionality Testing

Given I will navigate to "calc" page
When I will add two numbers "<Header 1>" and "<Header 2>"
Then the output displayed should be "<Header 3>"

Examples:
| Header 1 | Header 2 | Header 3 |
| 3 | 5  | 8 |
| 2 | 7 | 9 |


@SmokeTesting
  Scenario Outline: Angular site search functionality Testing

  Given I will navigate to "Angularjs" page
  When I clicked on header link
  And you will navigate to angular page
  Then you will enter "<key>" on search box


Examples:
| key| 
| hello  | 
| hey  | 
