# Clean Code: A Handbook of Agile Software Craftmanship

## Overview 

* This is compilation of the tips mentioned in that book to help easily remind me of them.

## Summary

### Meaningful Names

* **Use Intention Revealing Names** that tells you:
  * Why it exists
  * What it does
  * How it is used
* It should not require a comment
* **Avoid Disinformation** that obscure the meaning of the code, such as: 
  * Use of acronyms 
  * Looks like Unix platform variants
  * Do not refer to a grouping of something as a "List" unless it is an actual list 
    * e.g. accountList as opposed to accountGroup/accounts/bunchOfAccounts
  * Names which vary in small ways
    * e.g. xyzControllerForEfficientHandlingOfStrings
    * e.g. xyzControllerForEfficientStorageOfStrings
  * Using inconsistent spellings
  * The use of lowercase "L" or uppercase "O"
    * They look like ones and zeros
  * Make Meaningful Distinctions
    * If names should be different, they should also mean something different
    * Don't add "noise"
    * Or use words that are almost similar in meaning
      * e.g. `ProductData` and `ProductInfo`
  *
* **Use Pronounceable Names**
  * If you can't pronounce it, you can't discuss it without sounding like an idiot