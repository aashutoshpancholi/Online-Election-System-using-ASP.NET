<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="view result.aspx.vb" Inherits="view_result" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<a href="add new result.aspx">add result</a>
<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
        DataKeyNames="Result_id" DataSourceID="SqlDataSource1">
    <Columns>
        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
        <asp:BoundField DataField="Result_id" HeaderText="Result_id" 
            InsertVisible="False" ReadOnly="True" SortExpression="Result_id" />
        <asp:BoundField DataField="Elect_id" HeaderText="Elect_id" 
            SortExpression="Elect_id" />
        <asp:BoundField DataField="Total_votes" HeaderText="Total_votes" 
            SortExpression="Total_votes" />
    </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConflictDetection="CompareAllValues" 
        ConnectionString="<%$ ConnectionStrings:ConnectionString %>" 
        DeleteCommand="DELETE FROM [Result_info] WHERE [Result_id] = @original_Result_id AND (([Elect_id] = @original_Elect_id) OR ([Elect_id] IS NULL AND @original_Elect_id IS NULL)) AND (([Total_votes] = @original_Total_votes) OR ([Total_votes] IS NULL AND @original_Total_votes IS NULL))" 
        InsertCommand="INSERT INTO [Result_info] ([Elect_id], [Total_votes]) VALUES (@Elect_id, @Total_votes)" 
        OldValuesParameterFormatString="original_{0}" 
        SelectCommand="SELECT * FROM [Result_info]" 
        UpdateCommand="UPDATE [Result_info] SET [Elect_id] = @Elect_id, [Total_votes] = @Total_votes WHERE [Result_id] = @original_Result_id AND (([Elect_id] = @original_Elect_id) OR ([Elect_id] IS NULL AND @original_Elect_id IS NULL)) AND (([Total_votes] = @original_Total_votes) OR ([Total_votes] IS NULL AND @original_Total_votes IS NULL))">
        <DeleteParameters>
            <asp:Parameter Name="original_Result_id" Type="Decimal" />
            <asp:Parameter Name="original_Elect_id" Type="String" />
            <asp:Parameter Name="original_Total_votes" Type="Decimal" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="Elect_id" Type="String" />
            <asp:Parameter Name="Total_votes" Type="Decimal" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="Elect_id" Type="String" />
            <asp:Parameter Name="Total_votes" Type="Decimal" />
            <asp:Parameter Name="original_Result_id" Type="Decimal" />
            <asp:Parameter Name="original_Elect_id" Type="String" />
            <asp:Parameter Name="original_Total_votes" Type="Decimal" />
        </UpdateParameters>
    </asp:SqlDataSource>
</asp:Content>

