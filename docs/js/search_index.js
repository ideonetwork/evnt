var search_data = {"index":{"searchIndex":["evnt","command","event","handler","validator","completed?()","err()","error_codes()","error_messages()","errors()","new()","new()","notify()","reloaded?()","validate_blank()","validate_option()","validate_presence()","validate_type()","validates()","changelog","mit-license","readme"],"longSearchIndex":["evnt","evnt::command","evnt::event","evnt::handler","evnt::validator","evnt::command#completed?()","evnt::command#err()","evnt::command#error_codes()","evnt::command#error_messages()","evnt::command#errors()","evnt::command::new()","evnt::event::new()","evnt::handler#notify()","evnt::event#reloaded?()","evnt::validator::validate_blank()","evnt::validator::validate_option()","evnt::validator::validate_presence()","evnt::validator::validate_type()","evnt::validator::validates()","","",""],"info":[["Evnt","","Evnt.html","","<p>Evnt is a gem developed to integrate a test driven development and CQRS\npattern inside a ruby project. …\n"],["Evnt::Command","","Evnt/Command.html","","<p>Commands are used to run single tasks on the system. It&#39;s like a\ncontroller on an MVC architecture …\n"],["Evnt::Event","","Evnt/Event.html","","<p>Events are used to save on a persistent data structure what happends on the\nsystem.\n"],["Evnt::Handler","","Evnt/Handler.html","","<p>Handlers are used to listen one or more events and run tasks after their\nexecution.\n"],["Evnt::Validator","","Evnt/Validator.html","","<p>Validator is a class used to validates params and attributes automatically.\n"],["completed?","Evnt::Command","Evnt/Command.html#method-i-completed-3F","()","<p>This function tells if the command is completed or not. The returned object\nshould be a boolean value. …\n"],["err","Evnt::Command","Evnt/Command.html#method-i-err","(message, code: nil)","<p>This function can be used to stop the command execution and add a new\nerror. Using err inside a callback …\n"],["error_codes","Evnt::Command","Evnt/Command.html#method-i-error_codes","()","<p>This function returns the list of error codes of the command. The returned\nobject should be an array …\n"],["error_messages","Evnt::Command","Evnt/Command.html#method-i-error_messages","()","<p>This function returns the list of error messages of the command. The\nreturned object should be an array …\n"],["errors","Evnt::Command","Evnt/Command.html#method-i-errors","()","<p>This function returns the list of errors of the command. The returned\nobject should be an array of hashes …\n"],["new","Evnt::Command","Evnt/Command.html#method-c-new","(params, _options: {})","<p>The constructor is used to run a new command.\n<p>Attributes\n<p><code>params</code> - The list of parameters for the command. …\n"],["new","Evnt::Event","Evnt/Event.html#method-c-new","(params)","<p>The constructor is used to initialize a new event. The parameters are\nvalidated and added to the payload …\n"],["notify","Evnt::Handler","Evnt/Handler.html#method-i-notify","(event)","<p>This function is called from an event to notify an handler.\n<p>Attributes\n<p><code>event</code> - The event object that call …\n"],["reloaded?","Evnt::Event","Evnt/Event.html#method-i-reloaded-3F","()","<p>This function tells if the event is reloaded or not. The returned object\nshould be a boolean value corresponding …\n"],["validate_blank","Evnt::Validator","Evnt/Validator.html#method-c-validate_blank","(param, value)","<p>This function validates the blank of the prameter. A parameter is blank\nwhen its value is nil, false, …\n"],["validate_option","Evnt::Validator","Evnt/Validator.html#method-c-validate_option","(param, option_key, option_value)","<p>This function calls the correct validate function for a specific option.\n<p>Attributes\n<p><code>param</code> - The parameter …\n"],["validate_presence","Evnt::Validator","Evnt/Validator.html#method-c-validate_presence","(param, value)","<p>This function validates the presence of the prameter. A parameter is\npresent when its value is not nil. …\n"],["validate_type","Evnt::Validator","Evnt/Validator.html#method-c-validate_type","(param, value)","<p>This function validates the type of the parameter.\n<p>Attributes\n<p><code>param</code> - The parameter to be validated.\n"],["validates","Evnt::Validator","Evnt/Validator.html#method-c-validates","(param, options)","<p>This function is used to validates a parameter with some validation\noptions.\n<p>Attributes\n<p><code>param</code> - The parameter …\n"],["CHANGELOG","","CHANGELOG_md.html","","<p>Evnt changelog\n<p>Version 3.0\n<p>New features:\n"],["MIT-LICENSE","","MIT-LICENSE.html","","<p>Copyright 2017 Ideo SRL\n<p>Permission is hereby granted, free of charge, to any person obtaining a\ncopy of …\n"],["README","","README_md.html","","<p>Evnt\n<p>CQRS and Event Driven Development architecture for Ruby projects.\n<p>Installation\n"]]}}