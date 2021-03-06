// DO NOT EDIT THIS FILE, IT IS AUTMATICALLY GENERATED

module.exports = function (blockly) {
	var Blockly = blockly.Blockly;
	// var goog = blockly.goog;

	Blockly.Python.gpiozero_setUp = function() {
		if (!Blockly.Python.definitions_['gpiozero_setUp']) {
			Blockly.Python.definitions_['gpiozero_setUp'] = 'from gpiozero import * \n';
		}
	};

	Blockly.Python.gpiozero_importtime = function() {
		if (!Blockly.Python.definitions_['gpiozero_time']) {
			Blockly.Python.definitions_['gpiozero_time'] = 'from time import * \n';
		}
	};

	Blockly.Python.gpiozero_uniqueName = function(string) {
		return Blockly.Python.variableDB_.getDistinctName(string, Blockly.Generator.NAME_TYPE);
	};

	Blockly.Python['gpiozero_pin'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var dropdown_pin = block.getFieldValue('pin');
		// TODO: Assemble Python into code variable.
		var code = dropdown_pin.toString();
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_led'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'LED(' + value_pin.toString() + ')';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_servo'] = function(block) {
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'Servo(' + value_pin.toString() + ')';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_servo_detach'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.detach() \n';
		return code;
	};

	Blockly.Python['gpiozero_servo_max'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.max() \n';
		return code;
	};

	Blockly.Python['gpiozero_servo_mid'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.mid() \n';
		return code;
	};

	Blockly.Python['gpiozero_servo_min'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.min() \n';
		return code;
	};


	Blockly.Python['gpiozero_servo_value'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var number_name = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.value = ' + number_name.toString() + '\n';
		return code;
	};
	// Blockly.Python['gpiozero_angular_servo'] = function(block) {
	//   var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	//   // TODO: Assemble Python into code variable.
	//   var code = 'Servo(' + value_pin.toString() + ')';
	//   // TODO: Change ORDER_NONE to the correct strength.
	//   return [code, Blockly.Python.ORDER_NONE];
	// };

	Blockly.Python['gpiozero_pwm_led'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_led = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'PWMLED(' + value_led.toString() + ')\n';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_button'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'Button(' + value_pin_number.toString() + ', pull_up = False) \n';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	// Blockly.Python['gpiozero_button_when_held'] = function(block) {
	//     var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
	//     var value_function = Blockly.Python.valueToCode(block, 'function', Blockly.Python.ORDER_ATOMIC);
	//     // TODO: Assemble Python into code variable.
	//     var code = value_pin_number.toString() + '.when_held = ' + value_function + ' ';
	//     return code;
	// };

	Blockly.Python['gpiozero_button_is_pressed'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_button = Blockly.Python.valueToCode(block, 'button', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_button.toString() + '.is_pressed';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};



	Blockly.Python['gpiozero_button_wait_for_release'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_button = Blockly.Python.valueToCode(block, 'button', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_button.toString() + '.wait_for_release() \n';
		return code;
	};


	Blockly.Python['gpiozero_led_blink'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_led = Blockly.Python.valueToCode(block, 'led', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_led.toString() + '.blink() \n';
		return code;
	};

	Blockly.Python['gpiozero_button_when_held'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var statements_function = Blockly.Python.statementToCode(block, 'function');
		var functionName = Blockly.Python.gpiozero_uniqueName('function');
		// TODO: Assemble Python into code variable.
		var code =  '\ndef ' + functionName + '():\n\t' + statements_function.toString()
				+ value_pin + '.when_held = ' + functionName + '\n\n';
		return code;
	};

	Blockly.Python['gpiozero_button_when_pressed'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var statements_function = Blockly.Python.statementToCode(block, 'function');
		var functionName = Blockly.Python.gpiozero_uniqueName('function');
		// TODO: Assemble Python into code variable.
		var code =  '\ndef ' + functionName + '():\n\t' + statements_function.toString()
				+ value_pin + '.when_pressed = ' + functionName + '\n\n';
		return code;
	};

	Blockly.Python['gpiozero_button_when_released'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var statements_function = Blockly.Python.statementToCode(block, 'function');
		var functionName = Blockly.Python.gpiozero_uniqueName('function');
		// TODO: Assemble Python into code variable.
		var code =  '\ndef ' + functionName + '():\n\t' + statements_function.toString()
				+ value_pin + '.when_released = ' + functionName + '\n';
		return code;
	};

	Blockly.Python['gpiozero_pwm_on'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pwm_led = Blockly.Python.valueToCode(block, 'pwm_led', Blockly.Python.ORDER_ATOMIC);
		var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pwm_led.toString() + '.value = ' + value_value.toString() + ' / 255.0\n';
		return code;
	};

	Blockly.Python['gpiozero_button_wait_for_press'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_button = Blockly.Python.valueToCode(block, 'button', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_button.toString() + '.wait_for_press() \n';
		return code;
	};

	Blockly.Python['gpiozero_button_held_time'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_button = Blockly.Python.valueToCode(block, 'button', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_button.toString() + '.held_time';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_pause'] = function(/* block */) {
		Blockly.Python.gpiozero_setUp();
		// TODO: Assemble Python into code variable.
		var code = 'pause() \n';
		return code;
	};

	Blockly.Python['gpiozero_trafficlight'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
		var value_yellow = Blockly.Python.valueToCode(block, 'yellow', Blockly.Python.ORDER_ATOMIC);
		var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'TrafficLights( ' + value_red.toString() + ', ' + value_yellow.toString() + ', ' + value_green.toString() + ') ';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_led_turn_on'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_FUNCTION_CALL);
		// TODO: Assemble Python into code variable.
		var code = value_name.toString() + '.on()\n';
		return code;
	};

	Blockly.Python['gpiozero_led_turn_off'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_FUNCTION_CALL);
		// TODO: Assemble Python into code variable.
		var code = value_name.toString() + '.off()\n';
		return code;
	};

	Blockly.Python['gpiozero_led_toggle'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_FUNCTION_CALL);
		// TODO: Assemble Python into code variable.
		var code = value_name.toString() + '.toggle()\n';
		return code;
	};

	Blockly.Python['gpiozero_led_is_lit'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_led = Blockly.Python.valueToCode(block, 'led', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_led.toString() + 'is_lit';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_traffic_light_on'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var dropdown_light = block.getFieldValue('light');
		var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_name.toString() + '.' + dropdown_light.toString() + '.on() \n';
		return code;
	};


	Blockly.Python['gpiozero_traffic_blink'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.blink() \n';
		return code;
	};

	Blockly.Python['gpiozero_traffic_close'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.close() \n';
		return code;
	};


	Blockly.Python['gpiozero_pwm_pulse'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pwm_led = Blockly.Python.valueToCode(block, 'pwm_led', Blockly.Python.ORDER_FUNCTION_CALL);
		// TODO: Assemble Python into code variable.
		var code = value_pwm_led.toString() + '.pulse() \n';
		return code;
	};

	Blockly.Python['gpiozero_traffic_light_off'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var dropdown_light = block.getFieldValue('light');
		var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_name.toString() + '.' + dropdown_light.toString() + '.off() \n';
		return code;
	};

	Blockly.Python['gpiozero_start_labnetwork'] = function(/* block */) {
		Blockly.Python.gpiozero_setUp();
		// TODO: Assemble Python into code variable.
		var code = '...\n';
		return code;
	};

	Blockly.Python['gpiozero_lcd_write'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_lcd = 'LabLCD()';
		var value_str = Blockly.Python.valueToCode(block, 'str', Blockly.Python.ORDER_ATOMIC);
		var dropdown_line = block.getFieldValue('line');
		// TODO: Assemble Python into code variable.

		var code;
		if (dropdown_line.toString() === '1') {
			code = value_lcd + '.clear()\n' + value_lcd + '.set_cursor(0,0)\n' + value_lcd + '.message(' + value_str.toString() + ')\n';
		} else {
			code = value_lcd + '.clear()\n' + value_lcd + '.set_cursor(0,1)\n' + value_lcd + '.message(' + value_str.toString() + ')\n';
		}
		return code;
	};

	Blockly.Python['gpiozero_light_sensor'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'LightSensor(' + value_pin_number.toString() + ')';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_light_when_dark'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var statements_function = Blockly.Python.statementToCode(block, 'function');
		var functionName = Blockly.Python.gpiozero_uniqueName('function');
		// TODO: Assemble Python into code variable.
		var code =  '\ndef ' + functionName + '():\n\t' + statements_function.toString()
				+ value_pin + '.when_dark = ' + functionName + '\n\n';
		return code;
	};

	Blockly.Python['gpiozero_light_when_light'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var statements_function = Blockly.Python.statementToCode(block, 'function');
		var functionName = Blockly.Python.gpiozero_uniqueName('function');
		// TODO: Assemble Python into code variable.
		var code =  '\ndef ' + functionName + '():\n\t' + statements_function.toString()
				+ value_pin + '.when_light = ' + functionName + '\n\n';
		return code;
	};

	Blockly.Python['gpiozero_light_wait_for_dark'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin_number.toString() + '.wait_for_dark() \n';
		return code;
	};

	Blockly.Python['gpiozero_light_wait_for_light'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin_number.toString() + '.wait_for_light() \n';
		return code;
	};

	Blockly.Python['gpiozero_light_detected'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin_number.toString() + '.light_detected';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_buzzer'] = function(block) {
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'Buzzer(' + value_pin.toString() + ')';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_buzzer_beep'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.beep() \n';
		return code;
	};

	Blockly.Python['gpiozero_buzzer_on'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.on() \n';
		return code;
	};

	Blockly.Python['gpiozero_buzzer_off'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.off() \n';
		return code;
	};

	Blockly.Python['gpiozero_buzzer_toggle'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.toggle() \n';
		return code;
	};

	Blockly.Python['gpiozero_buzzer_is_active'] = function(block) {
		Blockly.Python.gpiozero_setUp();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_pin.toString() + '.is_active';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	// Blockly.Python['gpiozero_dht_sensor'] = function(block) {
	//   var dropdown_dropdown = block.getFieldValue('dropdown');
	//   var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	//   var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
	//   // TODO: Assemble Python into code variable.
	//   var code = value_var.toString() + ', _ = Adafruit_DHT.read_retry(' + dropdown_dropdown.toString() + ', ' + value_pin.toString() + ')\n';
	//   return code;
	// };


	// //TODO CHANGE TEMP
	// Blockly.Python['gpiozero_dht_sensor_temperature'] = function(block) {
	//   var dropdown_dropdown = block.getFieldValue('dropdown');
	//   var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	//   var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
	//   // TODO: Assemble Python into code variable.
	//   var code = ' _, ' + value_var.toString() + ' = Adafruit_DHT.read_retry(' + dropdown_dropdown.toString() + ', ' + value_pin.toString() + ')\n';
	//   return code;
	// };


	Blockly.Python['gpiozero_dht_sensor'] = function(block) {
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'w.DHTsensor(' + value_pin.toString() + ')\n';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_dht_temperature'] = function(block) {
		var value_dht = Blockly.Python.valueToCode(block, 'dht', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_dht.toString() + '.temperatureRead()\n';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['gpiozero_dht_humidity'] = function(block) {
		var value_dht = Blockly.Python.valueToCode(block, 'dht', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_dht.toString() + '.humidityRead()\n';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};
};