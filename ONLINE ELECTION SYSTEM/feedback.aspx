<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="feedback.aspx.vb" Inherits="feedback" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
        DataKeyNames="Feedback_id" DataSourceID="SqlDataSource1">
    <Columns>
        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
        <asp:BoundField DataField="Feedback_id" HeaderText="Feedback_id" 
            InsertVisible="False" ReadOnly="True" SortExpression="Feedback_id" />
        <asp:BoundField DataField="Subject" HeaderText="Subject" 
            SortExpression="Subject" />
        <asp:BoundField DataField="Description" HeaderText="Description" 
            SortExpression="Description" />
    </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConflictDetection="CompareAllValues" 
        ConnectionString="<%$ ConnectionStrings:ConnectionString %>" 
        DeleteCommand="DELETE FROM [Feedback_info] WHERE [Feedback_id] = @original_Feedback_id AND (([Subject] = @original_Subject) OR ([Subject] IS NULL AND @original_Subject IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL))" 
        InsertCommand="INSERT INTO [Feedback_info] ([Subject], [Description]) VALUES (@Subject, @Description)" 
        OldValuesParameterFormatString="original_{0}" 
        SelectCommand="SELECT * FROM [Feedback_info]" 
        UpdateCommand="UPDATE [Feedback_info] SET [Subject] = @Subject, [Description] = @Description WHERE [Feedback_id] = @original_Feedback_id AND (([Subject] = @original_Subject) OR ([Subject] IS NULL AND @original_Subject IS NULL)) AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL))">
        <DeleteParameters>
            <asp:Parameter Name="original_Feedback_id" Type="Decimal" />
            <asp:Parameter Name="original_Subject" Type="String" />
            <asp:Parameter Name="original_Description" Type="String" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="Subject" Type="String" />
            <asp:Parameter Name="Description" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="Subject" Type="String" />
            <asp:Parameter Name="Description" Type="String" />
            <asp:Parameter Name="original_Feedback_id" Type="Decimal" />
            <asp:Parameter Name="original_Subject" Type="String" />
            <asp:Parameter Name="original_Description" Type="String" />
        </UpdateParameters>
    </asp:SqlDataSource>
</asp:Content>

