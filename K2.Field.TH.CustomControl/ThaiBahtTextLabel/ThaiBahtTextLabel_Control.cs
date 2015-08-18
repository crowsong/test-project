using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using SourceCode.Forms.Controls.Web.SDK;
using SourceCode.Forms.Controls.Web.SDK.Attributes;

//Special Thanks: ThaiBathText dll from GreatFriends
//Github project link : https://github.com/greatfriends/ThaiBahtText 
using GreatFriends.ThaiBahtText;

[assembly: WebResource("K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Script.js", "text/javascript", PerformSubstitution = true)]
[assembly: WebResource("K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Style.css", "text/css", PerformSubstitution = true)]
namespace K2.Field.TH.CustomControl.ThaiBahtTextLabel
{
    [ControlTypeDefinition("K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Definition.xml")]
    [ClientScript("K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Script.js")]
    [ClientCss("K2.Field.TH.CustomControl.ThaiBahtTextLabel.ThaiBahtTextLabel_Style.css")]
    class ThaiBahtTextLabel_Control : BaseControl
    {
        public string Value
        {
            get
            {
                return this.Attributes["value"];
            }
            set
            {
                this.Attributes["value"] = value;
            }
        }
        public ThaiBahtTextLabel_Control() //: base("input")
        {
    
        }

        protected override void CreateChildControls()
        {
            base.EnsureChildControls();
            
            //LiteralControl literal = new LiteralControl();
            switch (base.State)
            {
                case SourceCode.Forms.Controls.Web.Shared.ControlState.Designtime:
                    this.ID = Guid.NewGuid().ToString();
                    this.Value = "0";
                    
                    //literal.Text = "ศูนย์บาทถ้วน";
                    break;
                case SourceCode.Forms.Controls.Web.Shared.ControlState.Preview:
                    //decimal _tmpValue = Convert.ToDecimal(this.ThaiBahtValue);
                    //string _bahttext = _tmpValue.ThaiBahtText();
                    //literal.Text = _bahttext;
                    break;
            }
            //this.Controls.Add(literal);
           
            base.CreateChildControls();
        }

       protected override void RenderContents(HtmlTextWriter writer)
       {
           LiteralControl ctrl = new LiteralControl();

           if (base.State == SourceCode.Forms.Controls.Web.Shared.ControlState.Runtime)
           {

               string sampleHTML = GenerateHTML();
               ctrl.Text = sampleHTML;
           }
           else
           {
               ctrl.Text = "Thai Baht Text by K2";
           }
           ctrl.RenderControl(writer);   
       }

       private string GenerateHTML()
       {
           try
           {
               LiteralControl literal = new LiteralControl();
               decimal _tmpValue = Convert.ToDecimal(this.Value);
               string _bahttext = _tmpValue.ThaiBahtText();
               literal.Text = _bahttext;

               StringBuilder sb = new StringBuilder();
               sb.Append(string.Format("<div id='myThaiBahtText'>{0}<div>", _bahttext));
               //sb.Append("<ul>");
               
               return sb.ToString();
           }
           catch (Exception ex)
           {
               return ex.Message;
           }
       }
    }
}
