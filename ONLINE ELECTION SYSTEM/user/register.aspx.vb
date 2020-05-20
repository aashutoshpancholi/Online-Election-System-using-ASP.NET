Imports System.Data.SqlClient
Partial Class user_register
    Inherits System.Web.UI.Page

    Protected Sub submit_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles submit.Click
        Dim constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
        Dim con As New SqlConnection(constr)
        con.Open()
        Dim fn As String
        Dim addr As String
        Dim cn As Double
        Dim em As String
        Dim ps As String
        Dim ag As String
        Dim gn As String = ""

        fn = username.Text
        addr = Add.Text
        cn = CDbl(contect.Text)
        em = email.Text
        ps = password.Text
        If gender.Checked Then
            gn = "male"
        ElseIf gender1.Checked Then
            gn = "female"
        End If
        ag = CInt(age.Text)

        Dim q As String
        q = "INSERT into Registraion_master(Name,Address,Contact,Email_id,Age,Gender,Password)values('" + fn + "','" + addr + "','" & cn & "','" + em + "','" & ag & "','" + gn + "','" + ps + "')"
        Dim cmd As New SqlCommand(q, con)
        Dim c = cmd.ExecuteNonQuery()
        If c = 1 Then
            MsgBox("succesfully registered")
            Session("user") = fn
            Response.Redirect("home.aspx")
        Else
            MsgBox("errorrrrr")
        End If


    End Sub
End Class
