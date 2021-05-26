# Internet of Things Foundation Series

## Sample Scenario: Ice Cream Company

* Main issue: maintaining the cold chain in food distribution
* Data Points:
  * Digital I/O for the Freezer Door (so we know if it is open)
  * Temperature for monitoring the trailer temperature
  * Voltage at the Freezer Unit so we know if the freezer is starved of power
  * Time and Day Stamp to tell when the above problems occur to correlate them with specific drivers 

## IoT Foundation Telemetry

### IoT Best Practises

* Take a reading every 5 seconds to know when different events occur (less bandwidth and data storage)
* Take the data from all the sensors and assemble them into a single message (efficient way to get the time series for the AWS Cloud)
* Track this in UTC (to future proof it)
