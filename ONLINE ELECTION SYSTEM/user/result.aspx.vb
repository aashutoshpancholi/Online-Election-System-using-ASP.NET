Imports System.Data.SqlClient
Partial Class user_Result
    Inherits System.Web.UI.Page
    Public s As String = ""
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim constr, q As String
        constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
        Dim con As New SqlConnection(constr)
        con.Open()
        q = "select * from Result_info"
        Dim cmd As New SqlCommand(q, con)
        Dim dr As SqlDataReader
        dr = cmd.ExecuteReader()
        s += "<table style='border: thin dashed #000000; padding: 25px; margin: 15px; border-collapse: inherit; border-spacing: 4px;'>"
        s += "<tr bgcolor='pink'><td>election id</td><td>totle vote</td></tr>"
        While dr.Read()
            s += "<tr bgcolor='skyblue'><td>" & dr(1) & "</td><td>" & dr(2) & "</td></tr>"
        End While
        s += "</table>"
        con.Close()
    End Sub
End Class
