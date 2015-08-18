using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SourceCode.Forms.Controls.Web.SDK;
using SourceCode.Forms.Controls.Web.SDK.Attributes;
using System.Web;
using GreatFriends.ThaiBahtText;


namespace K2.Field.TH.CustomControl.ThaiBahtTextLabel
{
    [ClientAjaxHandler("ThaiBahtTextLabel.Handler")]
    public class ThaiBahtTextLabelHandler : IHttpHandler
    {

        public bool IsReusable
        {
            // Return false in case your Managed Handler cannot be reused for another request.
            // Usually this would be false in case you have some state information preserved per request.
            get { return true; }
        }

        public void ProcessRequest(HttpContext context)
        {
                        
            //write your handler implementation here.
            string strValue = context.Request.Form["strValue"];
            decimal _tmpValue = Convert.ToDecimal(strValue);
            context.Response.Write(_tmpValue.ThaiBahtText());

            //context.Response.Write(getText(_tmpValue));
        }
    }
}
