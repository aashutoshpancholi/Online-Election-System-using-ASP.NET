<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="candidates info.aspx.vb" Inherits="candidates_info" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<a href="add candidate info.aspx">add candidate info<asp:GridView ID="GridView1" 
        runat="server" AutoGenerateColumns="False" DataKeyNames="C_id" 
        DataSourceID="SqlDataSource1">
        <Columns>
            <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
            <asp:BoundField DataField="C_id" HeaderText="C_id" InsertVisible="False" 
                ReadOnly="True" SortExpression="C_id" />
            <asp:BoundField DataField="C_name" HeaderText="C_name" 
                SortExpression="C_name" />
            <asp:BoundField DataField="C_party" HeaderText="C_party" 
                SortExpression="C_party" />
            <asp:BoundField DataField="C_partySymbol" HeaderText="C_partySymbol" 
                SortExpression="C_partySymbol" />
            <asp:BoundField DataField="Address" HeaderText="Address" 
                SortExpression="Address" />
            <asp:BoundField DataField="Gender" HeaderText="Gender" 
                SortExpression="Gender" />
            <asp:BoundField DataField="Age" HeaderText="Age" SortExpression="Age" />
            <asp:BoundField DataField="Criminal_Record" HeaderText="Criminal_Record" 
                SortExpression="Criminal_Record" />
        </Columns>
    </asp:GridView>
    </a>
    &nbsp;<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:ConnectionString %>" 
    SelectCommand="SELECT * FROM [Candidate_info]" 
        OldValuesParameterFormatString="original_{0}" 
        DeleteCommand="DELETE FROM [Candidate_info] WHERE [C_id] = @original_C_id" 
        InsertCommand="INSERT INTO [Candidate_info] ([C_name], [C_party], [C_partySymbol], [Address], [Gender], [Age], [Criminal_Record]) VALUES (@C_name, @C_party, @C_partySymbol, @Address, @Gender, @Age, @Criminal_Record)" 
        UpdateCommand="UPDATE [Candidate_info] SET [C_name] = @C_name, [C_party] = @C_party, [C_partySymbol] = @C_partySymbol, [Address] = @Address, [Gender] = @Gender, [Age] = @Age, [Criminal_Record] = @Criminal_Record WHERE [C_id] = @original_C_id">
        <DeleteParameters>
            <asp:Parameter Name="original_C_id" Type="Decimal" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="C_name" Type="String" />
            <asp:Parameter Name="C_party" Type="String" />
            <asp:Parameter Name="C_partySymbol" Type="String" />
            <asp:Parameter Name="Address" Type="String" />
            <asp:Parameter Name="Gender" Type="String" />
            <asp:Parameter Name="Age" Type="Int32" />
            <asp:Parameter Name="Criminal_Record" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="C_name" Type="String" />
            <asp:Parameter Name="C_party" Type="String" />
            <asp:Parameter Name="C_partySymbol" Type="String" />
            <asp:Parameter Name="Address" Type="String" />
            <asp:Parameter Name="Gender" Type="String" />
            <asp:Parameter Name="Age" Type="Int32" />
            <asp:Parameter Name="Criminal_Record" Type="String" />
            <asp:Parameter Name="original_C_id" Type="Decimal" />
        </UpdateParameters>
    </asp:SqlDataSource>
</asp:Content>

