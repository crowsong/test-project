//NOTE: alert() statements are available for debugging purposes. You can uncomment the statements to show dialogs when each method is hit.
(function ($) {
    //TODO: Step 4.4 : Add initialization statements for each namespace in the control
    if (typeof K2 === "undefined" || K2 == null) K2 = {};
    if (typeof K2.Field === "undefined" || K2.Field == null) K2.Field = {};
    if (typeof K2.Field.TH === "undefined" || K2.Field.TH == null) K2.Field.TH = {};
    if (typeof K2.Field.TH.CustomControl === "undefined" || K2.Field.TH.CustomControl == null) K2.Field.TH.CustomControl = {};
    //TODO: Step 4.5 : Replace all instances of K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Control with the control's fully-qualified name (e.g. K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Control)
    K2.Field.TH.CustomControl.ThaiBahtTextLabel = {

        //internal method used to get a handle on the control instance
        _getInstance: function (id) {
            //alert("_getInstance(" + id + ")");
            var control = jQuery('#' + id);
            if (control.length == 0) {
                throw 'K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Control \'' + id + '\' not found';
            } else {
                return control[0];
            }
        },

        getValue: function (objInfo) {
            //debugger;
            //alert("getValue() for control " + objInfo.CurrentControlId);
            var instance = K2.Field.TH.CustomControl.ThaiBahtTextLabel._getInstance(objInfo.CurrentControlId);
            return instance.value;
        },

        getDefaultValue: function (objInfo) {
            //alert("getDefaultValue() for control " + objInfo.CurrentControlId);
            getValue(objInfo);
        },

        setValue: function (objInfo) {
            //alert("setValue() for control " + objInfo.CurrentControlId);
            var instance = K2.Field.TH.CustomControl.ThaiBahtTextLabel._getInstance(objInfo.CurrentControlId);
            var oldValue = instance.value;
            //only change the value if it has actually changed, and then raise the OnChange event
            if (oldValue != objInfo.Value) {
                instance.value = objInfo.Value;
                //alert(instance.value + " is current value and " + objInfo.Value);
                var myValue = instance.value;
                $.ajax(
                	    {
                	        type: 'POST',
                	        url: 'K2.Field.TH.CustomControl/ThaiBahtTextLabel.Handler',
                	        cache: false,
                	        data: { strValue: myValue },
                	        dataType: 'text',
                	        async: false
                	    }).done(function (primarykey) {
                	        //alert(primarykey + ' objInfo.Value =' + objInfo.Value + ' myValue=' + myValue);
                	        //$('#' + currentControlID).val(primarykey);
                	        instance.value = primarykey;
                           
                	        var fieldNameElement = document.getElementById('myThaiBahtText');
                	        fieldNameElement.innerHTML = primarykey;
                	       
                	       
                	        //$('#myThaiBahtText').val(primarykey);

                	    }).success(function (primarykey) {
                	        //alert(primarykey);
                	        //$('#' + currentControlID).val(primarykey);
                	    });

                raiseEvent(objInfo.CurrentControlId, 'Control', 'OnChange');
            }
        },

        getProperty: function (objInfo) {
            //alert("getProperty(" + objInfo.property + ") for control " + objInfo.CurrentControlId);
            //debugger;
            if (objInfo.property.toLowerCase() == "value") {
                return K2.Field.TH.CustomControl.ThaiBahtTextLabel.getValue(objInfo);
            }
            else {
                return $('#' + objInfo.CurrentControlId).data(objInfo.property);
            }
        },

        setProperty: function (objInfo) {
            switch (objInfo.property.toLowerCase()) {
                case "style":
                    K2.Field.TH.CustomControl.ThaiBahtTextLabel.setStyles(null, objInfo.Value, $('#' + objInfo.CurrentControlId));
                    break;
                case "value":
                    K2.Field.TH.CustomControl.ThaiBahtTextLabel.setValue(objInfo);
                    break;
                case "isvisible":
                    K2.Field.TH.CustomControl.ThaiBahtTextLabel.setIsVisible(objInfo);
                    break;
                case "isenabled":
                    K2.Field.TH.CustomControl.ThaiBahtTextLabel.setIsEnabled(objInfo);
                    break;
                default:
                    $('#' + objInfo.CurrentControlId).data(objInfo.property).value = objInfo.Value;
            }
        },

        setStyles: function (wrapper, styles, target) {
            var isRuntime = (wrapper == null);
            var options = {};
            var element = isRuntime ? jQuery(target) : wrapper.find('.K2-Field-TH-CustomControl-ThaiBahtTextLabel');

            jQuery.extend(options, {
                "border": element,
                "background": element,
                "margin": element,
                "padding": element,
                "font": element,
                "horizontalAlign": element
            });

            StyleHelper.setStyles(options, styles);
        },

        //helper method to set visibility
        setIsVisible: function (objInfo) {
            //alert("set_isVisible: " + objInfo.Value);
            value = (objInfo.Value === true || objInfo.Value == 'true');
            this._isVisible = value;
            var displayValue = (value === false) ? "none" : "block";
            var instance = K2.Field.TH.CustomControl.ThaiBahtTextLabel._getInstance(objInfo.CurrentControlId);
            instance.style.display = displayValue;
        },

        //helper method to set control "enabled" state
        setIsEnabled: function (objInfo) {
            //alert("set_isEnabled: " + objInfo.Value);
            value = (objInfo.Value === true || objInfo.Value == 'true');
            this._isEnabled = value;
            var instance = K2.Field.TH.CustomControl.ThaiBahtTextLabel._getInstance(objInfo.CurrentControlId);
            instance.readOnly = !value;
        }

    };
})(jQuery);

$(document).ready(function () {
    //add a delegate event handler for user-driven clicks 
    //TODO: Step 4.6 : add delegation events for other user-driven events
    $(document).delegate('.SFC.K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Control', 'click.Control', function (e) {
        //alert("control " + this.id + " clicked");
        raiseEvent(this.id, 'Control', 'OnClick');
    });

    $(document).delegate(".SFC.K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Control", "change.Control", function (e) {
        //alert("control " + this.id + " changed");
        raiseEvent(this.id, 'Control', 'OnChange');
    });
    //(Note that custom controls created with the SDK have .SFC as the css class)

});