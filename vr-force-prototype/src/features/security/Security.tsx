import { Card } from '@/components/ui/Card';
import { Shield } from 'lucide-react';

export function Security() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Security & Audit</h1>
        <p className="text-slate-400">Implemented controls and verified test coverage</p>
      </div>
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-5 w-5 text-blue-400" />
          <h2 className="text-lg font-medium">Implemented</h2>
        </div>
        <ul className="text-sm text-slate-300 space-y-2">
          <li>Cognito authentication (OAuth 2.0 Authorization Code + PKCE)</li>
          <li>Cognito group-based tenant membership</li>
          <li>API Gateway JWT authorizer (issuer/audience per config)</li>
          <li>Lambda tenant derivation from Cognito groups</li>
          <li>DynamoDB tenant-scoped order queries</li>
          <li>S3 tenant-specific policy retrieval via API Gateway</li>
        </ul>
      </Card>
      <Card className="p-6">
        <h2 className="text-lg font-medium mb-3">Verified Tests (from backend)</h2>
        <ul className="text-sm text-slate-300 space-y-1 list-disc pl-4">
          <li>Shop A order retrieval: passed</li>
          <li>Shop B order retrieval: passed</li>
          <li>Shop A policy retrieval: passed</li>
          <li>Shop B policy retrieval: passed</li>
          <li>Invalid tenant membership rejection: passed</li>
          <li>API Gateway request without token rejected: passed</li>
        </ul>
        <p className="text-xs text-slate-500 mt-2">Lambda tests used simulated JWT claims</p>
      </Card>
      <Card className="p-6">
        <h2 className="text-lg font-medium mb-3">Planned (not deployed)</h2>
        <ul className="text-sm text-slate-400 space-y-1 list-disc pl-4">
          <li>Bedrock Guardrails, expanded audit logging, WAF</li>
          <li>KMS, Secrets Manager, IAM hardening</li>
          <li>Monitoring/tracing (CloudWatch, CloudTrail, X-Ray)</li>
        </ul>
      </Card>
    </div>
  );
}
