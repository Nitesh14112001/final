import Image from "next/image";

export default function Home() {
  return (
     <div class="container">
        <header>
            <h1>Process Tracker Dashboard</h1>
            <p class="subtitle">Monitor and manage your business processes in real-time</p>
        </header>
        
        <div class="dashboard-stats">
            <div class="stat-card">
                <h3>24</h3>
                <p>Active Processes</p>
            </div>
            <div class="stat-card">
                <h3>18</h3>
                <p>Completed Today</p>
            </div>
            <div class="stat-card">
                <h3>94%</h3>
                <p>Success Rate</p>
            </div>
            <div class="stat-card">
                <h3>2.3m</h3>
                <p>Total Executions</p>
            </div>
        </div>
        
        <div class="controls">
            <h2>Process Controls</h2>
            <div class="btn-group">
                <button><i class="fas fa-plus"></i> Add New Process</button>
                <button><i class="fas fa-play"></i> Start All</button>
                <button><i class="fas fa-pause"></i> Pause All</button>
                <button><i class="fas fa-redo"></i> Restart Failed</button>
                <button><i class="fas fa-chart-bar"></i> View Reports</button>
                <button><i class="fas fa-cog"></i> Settings</button>
            </div>
        </div>
        
        <div class="process-list">
            <h2>Active Processes</h2>
            <div class="process-grid">
               
                <div class="process-card">
                    <div class="process-header">
                        <div class="process-id">#PR-1024</div>
                        <div class="process-priority">High</div>
                    </div>
                    <h3 class="process-name">Data Import Process</h3>
                    <div class="status status-in-progress">In Progress</div>
                    <div class="progress-container">
                        <div class="progress-bar progress-in-progress"></div>
                    </div>
                    <div class="process-meta">
                        <div><i class="far fa-clock"></i> Started: 10:30 AM</div>
                        <div><i class="far fa-user"></i> John D.</div>
                    </div>
                    <div class="process-actions">
                        <button class="btn-pause"><i class="fas fa-pause"></i> Pause</button>
                        <button class="btn-complete"><i class="fas fa-check"></i> Complete</button>
                    </div>
                </div>
                
             
                <div class="process-card">
                    <div class="process-header">
                        <div class="process-id">#PR-1025</div>
                        <div class="process-priority">Medium</div>
                    </div>
                    <h3 class="process-name">Report Generation</h3>
                    <div class="status status-completed">Completed</div>
                    <div class="progress-container">
                        <div class="progress-bar progress-completed"></div>
                    </div>
                    <div class="process-meta">
                        <div><i class="far fa-clock"></i> Duration: 15m</div>
                        <div><i class="far fa-user"></i> Sarah M.</div>
                    </div>
                    <div class="process-actions">
                        <button class="btn-start"><i class="fas fa-redo"></i> Restart</button>
                        <button><i class="fas fa-file-download"></i> Export</button>
                    </div>
                </div>
                
             
                <div class="process-card">
                    <div class="process-header">
                        <div class="process-id">#PR-1026</div>
                        <div class="process-priority">Critical</div>
                    </div>
                    <h3 class="process-name">Payment Processing</h3>
                    <div class="status status-failed">Failed</div>
                    <div class="progress-container">
                        <div class="progress-bar progress-failed"></div>
                    </div>
                    <div class="process-meta">
                        <div><i class="far fa-clock"></i> Failed: 11:45 AM</div>
                        <div><i class="fas fa-exclamation-triangle"></i> Error: Connection timeout</div>
                    </div>
                    <div class="process-actions">
                        <button class="btn-start"><i class="fas fa-redo"></i> Retry</button>
                        <button><i class="fas fa-bug"></i> Debug</button>
                    </div>
                </div>
                
        
                <div class="process-card">
                    <div class="process-header">
                        <div class="process-id">#PR-1027</div>
                        <div class="process-priority">Low</div>
                    </div>
                    <h3 class="process-name">Backup Operation</h3>
                    <div class="status status-not-started">Not Started</div>
                    <div class="progress-container">
                        <div class="progress-bar progress-not-started"></div>
                    </div>
                    <div class="process-meta">
                        <div><i class="far fa-clock"></i> Scheduled: 2:00 PM</div>
                        <div><i class="far fa-user"></i> System</div>
                    </div>
                    <div class="process-actions">
                        <button class="btn-start"><i class="fas fa-play"></i> Start</button>
                        <button><i class="fas fa-edit"></i> Edit</button>
                    </div>
                </div>
           
                <div class="process-card">
                    <div class="process-header">
                        <div class="process-id">#PR-1028</div>
                        <div class="process-priority">High</div>
                    </div>
                    <h3 class="process-name">User Sync Process</h3>
                    <div class="status status-in-progress">In Progress</div>
                    <div class="progress-container">
                        <div class="progress-bar progress-in-progress"></div>
                    </div>
                    <div class="process-meta">
                        <div><i class="far fa-clock"></i> Started: 9:15 AM</div>
                        <div><i class="far fa-user"></i> Michael T.</div>
                    </div>
                    <div class="process-actions">
                        <button class="btn-pause"><i class="fas fa-pause"></i> Pause</button>
                        <button class="btn-complete"><i class="fas fa-check"></i> Complete</button>
                    </div>
                </div>
                
            
                <div class="process-card">
                    <div class="process-header">
                        <div class="process-id">#PR-1029</div>
                        <div class="process-priority">Medium</div>
                    </div>
                    <h3 class="process-name">Data Cleanup Job</h3>
                    <div class="status status-completed">Completed</div>
                    <div class="progress-container">
                        <div class="progress-bar progress-completed"></div>
                    </div>
                    <div class="process-meta">
                        <div><i class="far fa-clock"></i> Duration: 42m</div>
                        <div><i class="far fa-user"></i> Automated</div>
                    </div>
                    <div class="process-actions">
                        <button class="btn-start"><i class="fas fa-redo"></i> Rerun</button>
                        <button><i class="fas fa-chart-line"></i> Metrics</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}
