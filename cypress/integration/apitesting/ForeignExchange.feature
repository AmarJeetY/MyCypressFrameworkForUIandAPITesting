Feature: The API Test feature

  Scenario: GET Latest Foreign Exchange rates
    Given I have access to foreign exchange rate base API
    Then I can access Latest Foreign Exchange Rates with Symbols
    Then I can access Latest Foreign Exchange Rates with Base
    Then I can access Latest Foreign Exchange Rates with Symbols and Base
  
  Scenario Outline: GET Specific date Foreign Exchange rates
    Given I have access to foreign exchange rate base API
    Then I can access Latest Foreign Exchange Rates with Symbols for <date>
    Then I can access Latest Foreign Exchange Rates with Base for <date>
    Then I can access Latest Foreign Exchange Rates with Symbols and Base for <date>

 Examples:
       | scenario              | date         |
       | HappyPathPastDate     | "2010-01-12" |
       # Below case should fail as we are asking for future prices. But it passes.
       # This is bug in API server
       | BadPath               | "2050-01-12" | 

