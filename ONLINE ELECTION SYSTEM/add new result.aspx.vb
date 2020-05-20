Imports System.Data.SqlClient
Partial Class add_new_result
    Inherits System.Web.UI.Page

    Protected Sub ok_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles ok.Click
        Dim constr As String
        constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
        Dim con As New Sqlconnection(constr)
        con.Open()
        Dim tv, ei As Integer
        tv = CInt(votes.Text)
        ei = CInt(eid.Text)
        Dim q As String
        q = "insert into Result_info(Elect_id,Total_votes)values('" & ei & "','" & tv & "')"
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
