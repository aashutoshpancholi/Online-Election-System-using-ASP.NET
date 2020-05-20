<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="election info.aspx.vb" Inherits="election_info" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<a href="add election info.aspx">add election info</a>
<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
        DataKeyNames="Elect_id" DataSourceID="SqlDataSource1">
    <Columns>
        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
        <asp:BoundField DataField="Elect_id" HeaderText="Elect_id" 
            InsertVisible="False" ReadOnly="True" SortExpression="Elect_id" />
        <asp:BoundField DataField="Elect_type" HeaderText="Elect_type" 
            SortExpression="Elect_type" />
        <asp:BoundField DataField="Elect_date_time" HeaderText="Elect_date_time" 
            SortExpression="Elect_date_time" />
        <asp:BoundField DataField="City" HeaderText="City" SortExpression="City" />
    </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:ConnectionString %>" 
        DeleteCommand="DELETE FROM [Election_info] WHERE [Elect_id] = @original_Elect_id" 
        InsertCommand="INSERT INTO [Election_info] ([Elect_type], [Elect_date_time], [City]) VALUES (@Elect_type, @Elect_date_time, @City)" 
        OldValuesParameterFormatString="original_{0}" 
        SelectCommand="SELECT * FROM [Election_info]" 
        
        UpdateCommand="UPDATE [Election_info] SET [Elect_type] = @Elect_type, [Elect_date_time] = @Elect_date_time, [City] = @City WHERE [Elect_id] = @original_Elect_id">
        <DeleteParameters>
            <asp:Parameter Name="original_Elect_id" Type="Decimal" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="Elect_type" Type="String" />
            <asp:Parameter Name="Elect_date_time" Type="String" />
            <asp:Parameter Name="City" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="Elect_type" Type="String" />
            <asp:Parameter Name="Elect_date_time" Type="String" />
            <asp:Parameter Name="City" Type="String" />
            <asp:Parameter Name="original_Elect_id" Type="Decimal" />
        </UpdateParameters>
    </asp:SqlDataSource>
</asp:Content>

