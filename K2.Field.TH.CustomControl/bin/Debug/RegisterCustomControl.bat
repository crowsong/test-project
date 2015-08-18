REM
xcopy "K2.Field.TH.CustomControl.dll" "C:\Program Files (x86)\K2 blackpearl\K2 SmartForms Designer\bin\" /y /r
xcopy "K2.Field.TH.CustomControl.dll" "C:\Program Files (x86)\K2 blackpearl\K2 SmartForms Runtime\bin\" /y /r
xcopy "GreatFriends.ThaiBahtText.dll" "C:\Program Files (x86)\K2 blackpearl\K2 SmartForms Designer\bin\" /y /r
xcopy "GreatFriends.ThaiBahtText.dll" "C:\Program Files (x86)\K2 blackpearl\K2 SmartForms Runtime\bin\" /y /r
@SET CMD="C:\Program Files (x86)\K2 blackpearl\Bin\controlutil.exe" register -assembly:"C:\Program Files (x86)\K2 blackpearl\K2 SmartForms Designer\bin\K2.Field.TH.CustomControl.dll"
REM iisreset
%CMD%