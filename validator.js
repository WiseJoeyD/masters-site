$(document).ready(function() {
    $('#registerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            course: {
                validators: {
                    notEmpty: {
                        message: 'The course title is required and cannot be empty'
                    }
                }
            },
            /*current: {
                validators: {
                    notEmpty: {
                        message: 'The currently studying field is required and cannot be empty'
                    }
                }
            },
            university: {
                validators: {
                    notEmpty: {
                        message: 'The university name is required and cannot be empty'
                    }
                }
            },*/
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            },
            fName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },
            lName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            },
			city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required and cannot be empty'
                    }
                }
            },
			county: {
                validators: {
                    notEmpty: {
                        message: 'The county is required and cannot be empty'
                    }
                }
            },
			postcode: {
                validators: {
                    notEmpty: {
                        message: 'The postcode is required and cannot be empty'
                    }
                }
            },
            /*phone: {
                validators: {
                    notEmpty: {
                        message: 'A telephone number is required and cannot be empty'
                    }
                }
            },*/
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            }
        },
        submitHandler: function(validator, form, submitButton) {
            var fullName = [validator.getFieldElements('firstName').val(),
                            validator.getFieldElements('lastName').val()].join(' ');
            alert('Hello ' + fullName);
        }
    });
	
	// Populate Course Title from Graduate Course List page
	var queryString = new Array();
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                }
            }
        }
        if (queryString["name"] != null) {
            //var data = "<u>Values from QueryString</u><br /><br />";
            //data += "<b>Name:</b> " + queryString["name"];
            //$("#lblData").html(data);
			document.getElementById('course').value=queryString["name"]; 
        }
    });
});