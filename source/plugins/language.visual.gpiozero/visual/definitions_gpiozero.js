// DO NOT EDIT THIS FILE, IT IS AUTMATICALLY GENERATED

module.exports = function (blockly) {
	var Blockly = blockly.Blockly;
	// var goog = blockly.goog;

	Blockly.Blocks['gpiozero_pin'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([
					['GPIO0', '0'],
					['GPIO1', '1'],
					['GPIO2', '2'],
					['GPIO3', '3'],
					['GPIO4', '4'],
					['GPIO5', '5'],
					['GPIO6', '6'],
					['GPIO7', '7'],
					['GPIO8', '8'],
					['GPIO9', '9'],
					['GPIO10', '10'],
					['GPIO11', '11'],
					['GPIO12', '12'],
					['GPIO13', '13'],
					['GPIO14', '14'],
					['GPIO15', '15'],
					['GPIO16', '16'],
					['GPIO17', '17'],
					['GPIO18', '18'],
					['GPIO19', '19'],
					['GPIO20', '20'],
					['GPIO21', '21'],
					['GPIO22', '22'],
					['GPIO23', '23'],
					['GPIO24', '24'],
					['GPIO25', '25'],
					['GPIO26', '26'],
					['GPIO27', '27'],
				]), 'pin');
			this.setOutput(true, 'gpiozero_pinNumber');
			this.setColour(230);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_led'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck(['String', 'gpiozero_pinNumber'])
				.appendField('LED');
			this.setOutput(true, 'LED');
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
		}
	};

	Blockly.Blocks['gpiozero_servo'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck(['String', 'gpiozero_pinNumber'])
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('Servo Motor');
			this.setInputsInline(true);
			this.setOutput(true, 'servo');
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
		}
	};

	// Blockly.Blocks['angular_servo'] = {
	//   init: function() {
	//     this.appendValueInput('pin')
	//         .setCheck(['String', 'gpiozero_pinNumber'])
	//         .setAlign(Blockly.ALIGN_RIGHT)
	//         .appendField('Angular Servo Motor');
	//     this.setInputsInline(true);
	//     this.setOutput(true, 'angular_servo');
	//     this.setColour(105);
	//  this.setTooltip('');
	//  this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
	//   }
	// };

	Blockly.Blocks['gpiozero_pwm_led'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck(['String', 'gpiozero_pinNumber'])
				.appendField('PWM LED');
			this.setOutput(true, 'PWM_LED');
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
		}
	};

	Blockly.Blocks['gpiozero_button'] = {
		init: function() {
			this.appendValueInput('pin_number')
				.setCheck(['String', 'gpiozero_pinNumber'])
				.appendField('Button');
			this.setOutput(true, 'button');
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
		}
	};

	Blockly.Blocks['gpiozero_button_when_held'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('button')
				.appendField('When button');
			this.appendDummyInput()
				.appendField('is held, do:');
			this.appendStatementInput('function')
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.Button.when_held');
		}
	};

	Blockly.Blocks['gpiozero_button_when_pressed'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('button')
				.appendField('When button');
			this.appendDummyInput()
				.appendField('is pressed, do:');
			this.appendStatementInput('function')
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.Button.when_pressed');
		}
	};

	Blockly.Blocks['gpiozero_button_when_released'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('button')
				.appendField('When button');
			this.appendDummyInput()
				.appendField('is released, do:');
			this.appendStatementInput('function')
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.Button.when_released');
		}
	};


	Blockly.Blocks['gpiozero_button_is_pressed'] = {
		init: function() {
			this.appendValueInput('button')
				.setCheck('button')
				.appendField('button');
			this.appendDummyInput()
				.appendField('is pressed');
			this.setOutput(true, 'Boolean');
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.Button.is_pressed');
		}
	};

	Blockly.Blocks['gpiozero_servo_detach'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('servo')
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('Detach Servo Motor');
			this.appendDummyInput()
				.appendField('.');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Servo.detach');
		}
	};

	Blockly.Blocks['gpiozero_servo_max'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('servo')
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('Set Servo Motor');
			this.appendDummyInput()
				.appendField('to its max position.');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Servo.max');
		}
	};

	Blockly.Blocks['gpiozero_servo_mid'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('servo')
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('Set Servo Motor');
			this.appendDummyInput()
				.appendField('to its mid position.');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Servo.mid');
		}
	};

	Blockly.Blocks['gpiozero_servo_min'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('servo')
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('Set Servo Motor');
			this.appendDummyInput()
				.appendField('to its min position.');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Servo.min');
		}
	};

	Blockly.Blocks['gpiozero_servo_value'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('servo')
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('For Servo Motor');
			this.appendValueInput('value')
				.setCheck('Number')
				.appendField('set value');
			this.appendDummyInput()
				.appendField('(between -1 and 1).');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Servo.value');
		}
	};

	Blockly.Blocks['gpiozero_button_wait_for_release'] = {
		init: function() {
			this.appendValueInput('button')
				.setCheck('button')
				.appendField('Wait until button');
			this.appendDummyInput()
				.appendField('is released.');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.Button.wait_for_release');
		}
	};

	Blockly.Blocks['gpiozero_button_held_time'] = {
		init: function() {
			this.appendValueInput('button')
				.setCheck('button')
				.appendField('how many seconds button');
			this.appendDummyInput()
				.appendField('has been held for.');
			this.setOutput(true, 'math_number');
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.Button.held_time');
		}
	};
	Blockly.Blocks['gpiozero_led_blink'] = {
		init: function() {
			this.appendValueInput('led')
				.setCheck(['PWM_LED', 'LED', 'traffic'])
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField('Blink LED ');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_pwm_on'] = {
		init: function() {
			this.appendValueInput('pwm_led')
				.setCheck('PWM_LED')
				.appendField('Turn on PWM LED');
			this.appendValueInput('value')
				.setCheck('Number')
				.appendField('with value');
			//   this.appendDummyInput()
			// 	  .appendField('(between 0 and 255)');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_button_wait_for_press'] = {
		init: function() {
			this.appendValueInput('button')
				.setCheck('button')
				.appendField('Wait until button');
			this.appendDummyInput()
				.appendField('is pressed');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(0);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_pause'] = {
		init: function() {
			this.appendDummyInput()
				.appendField('Pause');
			this.setPreviousStatement(true, null);
			this.setColour(320);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_trafficlight'] = {
		init: function() {
			this.appendValueInput('red')
				.setCheck(['String', 'gpiozero_pinNumber'])
				.appendField('Traffic Lights');
			this.appendValueInput('yellow')
				.setCheck(['String', 'gpiozero_pinNumber']);
			this.appendValueInput('green')
				.setCheck(['String', 'gpiozero_pinNumber']);
			this.setOutput(true, 'traffic');
			this.setColour(240);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_led_turn_on'] = {
		init: function() {
			this.appendValueInput('NAME')
				.setCheck(['PWM_LED', 'LED', 'traffic'])
				.appendField('Turn on LED');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_led_turn_off'] = {
		init: function() {
			this.appendValueInput('NAME')
				.setCheck(['PWM_LED', 'LED', 'traffic'])
				.appendField('Turn off LED');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_led_toggle'] = {
		init: function() {
			this.appendValueInput('NAME')
				.setCheck(['PWM_LED', 'LED', 'traffic'])
				.appendField('Toggle LED');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_led_is_lit'] = {
		init: function() {
			this.appendValueInput('led')
				.setCheck(['PWM_LED', 'LED'])
				.appendField('led');
			this.appendDummyInput()
				.appendField('is lit.');
			this.setOutput(true, ['Number', 'Boolean']);
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_traffic_light_on'] = {
		init: function() {
			this.appendDummyInput()
				.appendField('Turn on')
				.appendField(new Blockly.FieldDropdown([
					['red', 'red'],
					['yellow', 'yellow'],
					['green', 'green']
				]), 'light');
			this.appendValueInput('NAME')
				.setCheck('traffic')
				.appendField('for Traffic Light');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(240);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_traffic_blink'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('traffic')
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('Blink traffic light');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(240);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#gpiozero.TrafficLights.blink');
		}
	};

	Blockly.Blocks['gpiozero_traffic_close'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('traffic')
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField('Close traffic light');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(240);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#gpiozero.TrafficLights.close');
		}
	};

	Blockly.Blocks['gpiozero_pwm_pulse'] = {
		init: function() {
			this.appendValueInput('pwm_led')
				.setCheck('PWM_LED', 'traffic')
				.appendField('Pulse PWM LED');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(200);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_traffic_light_off'] = {
		init: function() {
			this.appendDummyInput()
				.appendField('Turn off')
				.appendField(new Blockly.FieldDropdown([
					['red', 'red'],
					['yellow', 'yellow'],
					['green', 'green']
				]), 'light');
			this.appendValueInput('NAME')
				.setCheck('traffic')
				.appendField('for Traffic Light');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(240);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['gpiozero_light_sensor'] = {
		init: function() {
			this.appendValueInput('pin_number')
				.setCheck(['String', 'gpiozero_pinNumber'])
				.appendField('Light Sensor');
			this.setOutput(true, 'light_sensor');
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.LightSensor');
		}
	};

	Blockly.Blocks['gpiozero_light_when_dark'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('light_sensor')
				.appendField('When light sensor');
			this.appendDummyInput()
				.appendField('senses dark, do:');
			this.appendStatementInput('function')
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.LightSensor.when_dark');
		}
	};

	Blockly.Blocks['gpiozero_light_when_light'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('light_sensor')
				.appendField('When light sensor');
			this.appendDummyInput()
				.appendField('senses light, do:');
			this.appendStatementInput('function')
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.LightSensor.when_light');
		}
	};

	Blockly.Blocks['gpiozero_light_wait_for_dark'] = {
		init: function() {
			this.appendValueInput('pin_number')
				.setCheck('light_sensor')
				.appendField('Wait until light sensor');
			this.appendDummyInput()
				.appendField('sees dark.');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.LightSensor.wait_for_dark');
		}
	};

	Blockly.Blocks['gpiozero_light_wait_for_light'] = {
		init: function() {
			this.appendValueInput('pin_number')
				.setCheck('light_sensor')
				.appendField('Wait until light sensor');
			this.appendDummyInput()
				.appendField('sees light.');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.LightSensor.wait_for_light');
		}
	};

	Blockly.Blocks['gpiozero_light_detected'] = {
		init: function() {
			this.appendValueInput('pin_number')
				.setCheck('light_sensor')
				.appendField('sensor');
			this.appendDummyInput()
				.appendField('detects light.');
			this.setOutput(true, ['Boolean', 'Number']);
			this.setColour(40);
			this.setTooltip('');
			this.setHelpUrl('AChttps://gpiozero.readthedocs.io/en/stable/api_input.html#gpiozero.LightSensor.light_detected');
		}
	};

	Blockly.Blocks['gpiozero_buzzer'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck(['String', 'gpiozero_pinNumber'])
				.appendField('buzzer');
			this.setOutput(true, 'buzzer');
			this.setColour(320);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
		}
	};

	Blockly.Blocks['gpiozero_buzzer_beep'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('buzzer')
				.appendField('Beep buzzer');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(320);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Buzzer.beep');
		}
	};

	Blockly.Blocks['gpiozero_buzzer_on'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('buzzer')
				.appendField('Turn on buzzer');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(320);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Buzzer.on');
		}
	};

	Blockly.Blocks['gpiozero_buzzer_off'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('buzzer')
				.appendField('Turn off buzzer');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(320);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Buzzer.off');
		}
	};

	Blockly.Blocks['gpiozero_buzzer_toggle'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('buzzer')
				.appendField('Toggle buzzer');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(320);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Buzzer.toggle');
		}
	};

	Blockly.Blocks['gpiozero_buzzer_is_active'] = {
		init: function() {
			this.appendValueInput('pin')
				.setCheck('buzzer')
				.appendField('buzzer');
			this.appendDummyInput()
				.appendField('is active.');
			this.setOutput(true, ['Number', 'Boolean']);
			this.setColour(320);
			this.setTooltip('');
			this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#gpiozero.Buzzer.toggle');
		}
	};
};