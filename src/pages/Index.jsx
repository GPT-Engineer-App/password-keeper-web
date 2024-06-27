import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleAddAccount = () => {
    if (account && password) {
      setAccounts([...accounts, { account, password }]);
      setAccount("");
      setPassword("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Add Account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="account">Account</Label>
              <Input
                id="account"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="Enter account"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <Button onClick={handleAddAccount}>Add</Button>
          </div>
        </CardContent>
      </Card>
      <Separator />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Saved Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {accounts.length === 0 ? (
              <p>No accounts saved.</p>
            ) : (
              accounts.map((acc, index) => (
                <div key={index} className="flex justify-between">
                  <span>{acc.account}</span>
                  <span>{acc.password}</span>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;