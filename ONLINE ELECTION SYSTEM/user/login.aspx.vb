

Imports System.Data.SqlClient
Partial Class user_login
    Inherits System.Web.UI.Page

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim constr, q, un, pw As String
        constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
        Dim con As New SqlConnection(constr)
        con.Open()
        un = username.Text
        pw = password.Text
        q = "select Name , Password from Registraion_master"
        Dim cmd As New SqlCommand(q, con)
        Dim dr As SqlDataReader
        dr = cmd.ExecuteReader()
        While dr.Read()
            If un = dr(0) Then
                If pw = dr(1) Then
                    Session("user") = un
                    Response.Redirect("home.aspx")
                End If
            End If
        End While
        MsgBox("invelid username and password")
        con.Close()
    End Sub

  
End Class

