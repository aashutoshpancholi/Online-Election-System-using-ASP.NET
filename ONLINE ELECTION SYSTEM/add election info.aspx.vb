Imports System.Data.SqlClient
Partial Class add_election_info
    Inherits System.Web.UI.Page

    Protected Sub ok_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles ok.Click
        Dim constr As String
        constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
        Dim con As New Sqlconnection(constr)
        con.Open()
        Dim edt, et, cty As String
        et = etype.Text
        cty = city.Text
        edt = edatetime.Text
        Dim q As String
        q = "insert into Election_info(Elect_type,Elect_date_time,city)values('" + et + "','" + edt + "','" + cty + "')"
        Dim cmd As New SqlCommand(q, con)
        Dim c = cmd.ExecuteNonQuery()
        If c = 1 Then
            MsgBox("data inserted")
        Else
            MsgBox("error occured")
        End If
        con.Close()
    End Sub
End Class
