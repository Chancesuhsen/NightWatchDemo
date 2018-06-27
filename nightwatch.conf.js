const sauce_username = process.env.SAUCE_USERNAME;
const sauce_access_key = process.env.SAUCE_ACCESS_KEY;

const config = {
    "src_folders": ["./tests"],
    "output_folder": "./reports",
    "custom_commands_path": "./custom_commands",
    "custom_assertions_path": "",
    "page_objects_path": "./pageobjects",
    "globals_path": "./lib/Globals.js",
    "live_output": false,
    "parallel_process_delay": 5000,
    "disable_colors": false,
    "test_workers": {
        "enabled": true,
        "workers": "2"
    },
    "selenium": {
        "start_process": false,
        "server_path": "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.12.0.jar",
        "log_path": "./logs",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
            "webdriver.gecko.driver": "./lib/geckodriver_020.exe",
            "webdriver.ie.driver": "./lib/IEDriverServer.exe",
            "webdriver.ie.driver.loglevel": "TRACE",
            "webdriver.ie.driver.logfile": "./logs/iedriver.log",
            "webdriver.edge.driver": "./lib/MicrosoftWebDriver.exe",
            "webdriver.firefox.logfile": "./logs/gecko.log"
        }
    },
    "test_settings": {
        "default": {
            "launch_url": "",
            "selenium_host": "ondemand.saucelabs.com",
            "selenium_port": 4444,
            "username": sauce_username,
            "access_key": sauce_access_key,
            "use_ssl": false,
            "silent": true,
            "output": true,
            "screenshots": {
                "enabled": false,
                "on_failure": true,
                "path": "./screenshots"
            },
            "desiredCapabilities": {
                "name": "RepairClinic_automation_nightwatch",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            },
            "selenium": {
                "start_process": false
            }
        },
        "saucelabssafari": {                        
            "launch_url": "",
             
            "desiredCapabilities":{
                "browserName": "safari",
                "platform": "macOS 10.12",
                "version": "11.0",
                "screenResolution": "1920x1440"
            },
            "selenium": {
                "start_process": false
            }
        },
        "saucelabschromewindows": {                        
            "launch_url": "",
            
            "desiredCapabilities":{
                "browserName": "chrome",
                "platform": "Windows 10",
                "screenResolution": "1920x1080",
                "seleniumVersion": "3.12.0"
            },
            "selenium": {
                "start_process": false
            }
        },
        "saucelabschromemac": {                        
            "launch_url": "",
            
            "desiredCapabilities":{
                "browserName": "chrome",
                "platform": "macOS 10.13",
                "screenResolution": "1920x1440",
                "seleniumVersion": "3.12.0"
            },
            "selenium": {
                "start_process": false
            }
        },
        "saucelabsfirefox": {                        
            "launch_url": "",
            
            "desiredCapabilities":{
                "browserName": "firefox",
                "version": "60.0",                
                "seleniumVersion": "3.12.0",
                "platform": "Windows 10",
                "screenResolution": "1920x1080",
                "moz:firefoxOptions": {
                    "log": {
                        "level": "trace"}
                }
            },
            "selenium": {
                "start_process": false,
                "webdriver.firefox.logfile": "geckodriver.log"
            }
        },
        "saucelabsie": {                        
            "launch_url": "",
            
            "desiredCapabilities":{
                "browserName": "internet explorer",
                "se:ieOptions":{
                    "requireWindowFocus": true,
                    "ie.ensureCleanSession": true,
                    //"browserAttachTimeout": 10000
                },
                "iedriverVersion": "3.12.0",
                "seleniumVersion": "3.12.0",
                "platform": "Windows 10",
                "screenResolution": "1920x1080"
            },
            "selenium": {
                "start_process": false,
                "webdriver.ie.driver.loglevel": "TRACE",
                "webdriver.ie.driver.logfile": "iedriver.log"
            }
        },
        "saucelabsedge": {                        
            "launch_url": "",
            
            "desiredCapabilities":{
                "browserName": "MicrosoftEdge",
                "seleniumVersion": "3.8.1",
                "platform": "Windows 10",
                "screenResolution": "1920x1080"                
            },
            "selenium": {
                "start_process": false
            }
        },
        "localchrome": {
            "launch_url": "http://magenicautomation.azurewebsites.net",
            
            "desiredCapabilities": {
                "name": "Nightwatch - local-chrome",
                "browserName": "chrome"
                // "chromeOptions": {
                //     "args": ["start-maximized","enable-strict-mixed-content-checking=false"]
                // }
            },
            "selenium_host": "localhost", 
            "selenium": {
                "start_process": true
            },
            "test_workers": {
                "enabled": false
            }
        },
        "localfirefox": {
            "launch_url": "",
            
            "desiredCapabilities": {
                "name": "Nightwatch - local-firefox",
                "browserName": "firefox",
                "moz:firefoxOptions": {
                    "log": {
                        "level": "trace"}
                }
            },
            "selenium_host": "localhost",
            "selenium": {
                "start_process": true
            },
            "test_workers": {
                "enabled": false
            }
        },
        "localedge": {
            "launch_url": "",
            
            "desiredCapabilities": {
                "name": "Nightwatch - local-edge",
                "browserName": "MicrosoftEdge"
            },
            "selenium_host": "localhost",
            "selenium": {
                "start_process": true
            },
            "test_workers": {
                "enabled": false
            }
        },
        "localie": {
            "launch_url": "",
            
            "desiredCapabilities": {
                "name": "Nightwatch - local-ie",
                "browserName": "internet explorer",
                "se:ieOptions":{
                    "requireWindowFocus": true,
                    "ie.ensureCleanSession": true
                }
            },
            "selenium_host": "localhost",
            "selenium": {
                "start_process": true
            },
            "test_workers": {
                "enabled": false
            }
        }
    }
}
module.exports = config;