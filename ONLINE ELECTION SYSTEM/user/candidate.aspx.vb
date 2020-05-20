Imports System.Data.SqlClient
Partial Class user_Candidate
    Inherits System.Web.UI.Page
    Public s As String = ""
    Public v As Integer
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim constr, q As String
        constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
        Dim con As New SqlConnection(constr)
        con.Open()
        q = "select * from Candidate_info"
        Dim cmd As New SqlCommand(q, con)
        Dim dr As SqlDataReader
        dr = cmd.ExecuteReader()
        s += "<table style='border: thin dashed #000000; padding: 25px; margin: 15px; border-collapse: inherit; border-spacing: 4px;'>"
        s += "<tr bgcolor='pink'><td>Candidate Name</td><td>party</td><td>Partysymbol</td><td>Address</td><td>gender</td><td>Age</td><td>criminalRecord</td></tr>"
        While dr.Read()
            s += "<tr bgcolor='skyblue'><td>" + dr(1) + "</td><td>" + dr(2) + "</td><td>" + dr(3) + "</td><td>" + dr(4) + "</td><td>" + dr(5) + "<td>" & dr(6) & "</td></td><td>" + dr(7) + "</td></tr>"
        End While
        s += "</table>"
        con.Close()
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim c As String
        If v = 0 Then
            c = DropDownList1.SelectedItem.ToString
            MsgBox("your vote given to  " + c)
        Else
            MsgBox("already your vote is  given")
            v = 1
        End If


    End Sub
End Class
