Feature: The UI Test Feature

  Scenario Outline: Buy Bow Ties on Snipcart
    Given I open snipcart home page
    And I select "bow-ties" product    
    And I select colour <colour>
    And I click buy button    

  Examples:
       | scenario | colour       | 
       | Colour1  | "White Gray" | 

  
     

    