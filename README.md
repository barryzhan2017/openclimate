# openclimatedem
Searching for persons in charge for open climate democracy
-

Tools: nodejs + mongodb

Note: I will delete the config.env file to keep the database credential secure. If you need this credential file for any purpose, feel free to reach out to me.

To import data in data directory:
- **Firstly backup the previous data.xlsx**
- Make sure node.js is installed in your pc
- In data directory run ```node import-data.js --delete ```(To delete previous data)
- Replace new data.xlsx with existing one 
- In data directory run ``` node import-data.js --import ```(To import current data.xlsx in current data directory)
- Deletion and import result can be found in terminal

To restore the previous backup data in case of unsuccessful import:
- Just replace the new data.xlsx with old one and run ``` node import-data.js --import ```

