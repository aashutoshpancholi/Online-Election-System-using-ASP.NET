Imports System.Data.SqlClient
Partial Class user_feedback
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        If Session("user") = "" Then
            MsgBox("please login to send feedback")
        Else


            Dim constr As String
            constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
            Dim con As New SqlConnection(constr)
            con.Open()
            Dim subj, msg, dt As String
            subj = subject.Text
            msg = message.Text
            dt = System.DateTime.Now.Date.ToShortDateString()
            Dim q As String
            q = "insert into Feedback_info(subject,description,Username,date)values('" + subj + "','" + msg + "','" + Session("user") + "','" + dt + "')"
            Dim cmd As New SqlCommand(q, con)
            Dim c = cmd.ExecuteNonQuery()
            If c = 1 Then
                MsgBox("feedback sent sucessfully")
            Else
                MsgBox("error occured")
            End If
            con.Close()
        End If
    End Sub
End Class
