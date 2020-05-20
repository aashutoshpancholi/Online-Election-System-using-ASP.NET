Imports System.Data.SqlClient
Partial Class add_candidate_info
    Inherits System.Web.UI.Page

    Protected Sub ok_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles ok.Click
        Dim constr As String
        constr = "Data Source=.\SQLEXPRESS;AttachDbFilename='H:\New folder\AASHU PROJECT-6\App_Data\ELECT.mdf';Integrated Security=True;User Instance=True"
        Dim con As New Sqlconnection(constr)
        con.Open()
        Dim cnm, cp, gen, add, cr, cps As String
        Dim age As Integer
        cnm = Cname.Text
        cp = cparty.Text
        add = address.Text
        cr = criminalrecord.Text
        gen = gender.Text
        cps = FileUpload1.FileName
        age = CInt(ag.Text)
        Dim q As String
        q = "insert into candidate_info(c_name,c_party,address,criminal_record,gender,Age,C_partySymbol)values('" + cnm + "','" + cp + "','" + add + "','" + cr + "','" + gen + "','" & age & "','" + cps + "')"
        Dim cmd As New SqlCommand(q, con)
        Dim c = cmd.executenonquery()
        If c = 1 Then
            MsgBox("data inserted")
        Else
            MsgBox("error occured")
        End If
        con.Close()
    End Sub
End Class
